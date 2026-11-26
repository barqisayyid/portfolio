/* ==========================================================================
   PROGRESSIVE ENHANCEMENTS (PRD §3.4)
   Polyfill TIDAK pernah dimuat tanpa kondisi.
   ========================================================================== */

// 1. Polyfill bersyarat
if (!("CommandEvent" in window)) {
  // @ts-ignore: paket polyfill tanpa type declaration
  import("invokers-polyfill");
}
if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
  // @ts-ignore
  import("@oddbird/popover-polyfill");
}

// 2. Dialog: animasi keluar & closedby="any"
const supportsTopLayerExit = (): boolean =>
  !!window.CSS?.supports?.("overlay", "auto") &&
  !!window.CSS?.supports?.("transition-behavior", "allow-discrete");

async function closeDialogSmoothly(dialog: HTMLDialogElement): Promise<void> {
  if (!dialog.open) return;

  // Browser tanpa top-layer exit transition: tunda close() sampai transisi opacity selesai
  if (!supportsTopLayerExit()) {
    dialog.setAttribute("data-closing", "");
    const animations = dialog.getAnimations({ subtree: true });
    if (animations.length > 0) {
      await Promise.race([
        Promise.allSettled(animations.map((a) => a.finished)),
        new Promise((resolve) => setTimeout(resolve, 400)),
      ]);
    }
    if (!dialog.hasAttribute("data-closing")) return;
    dialog.removeAttribute("data-closing");
  }
  dialog.close();
}

function enhanceDialog(dialog: HTMLDialogElement): void {
  // Reset returnValue agar nilai lama tidak bocor ke pembukaan berikutnya
  dialog.addEventListener("close", () => {
    dialog.returnValue = "";
    dialog.removeAttribute("data-closing");
  });

  // Esc / closedby: lewat jalur tutup halus bila perlu
  dialog.addEventListener("cancel", (event) => {
    if (!supportsTopLayerExit() && event.cancelable) {
      event.preventDefault();
      void closeDialogSmoothly(dialog);
    }
  });

  // Tombol tutup <form method="dialog">
  dialog
    .querySelectorAll<HTMLFormElement>('form[method="dialog"]')
    .forEach((form) => {
      form.addEventListener("submit", (event) => {
        if (!supportsTopLayerExit()) {
          event.preventDefault();
          void closeDialogSmoothly(dialog);
        }
      });
    });

  // Fallback closedby="any" (Safari): pointerdown DAN pointerup harus di luar dialog
  if (!("closedBy" in HTMLDialogElement.prototype)) {
    const isOutside = (e: PointerEvent): boolean => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };
    let pressedOutside = false;
    dialog.addEventListener("pointerdown", (e) => {
      pressedOutside = isOutside(e);
    });
    dialog.addEventListener("pointerup", (e) => {
      if (pressedOutside && isOutside(e)) void closeDialogSmoothly(dialog);
      pressedOutside = false;
    });
  }
}

document
  .querySelectorAll<HTMLDialogElement>("dialog[closedby]")
  .forEach(enhanceDialog);
  