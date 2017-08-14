    function fillImage(image, r, g, b) { // remove transparency & add backround
        const canvas = document.createElement('canvas');
        const w = canvas.width = image.width;
        const h = canvas.height = image.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(image, 0, 0, w, h);

        const imageData = ctx.getImageData(0, 0, w, h);
        const pixels = imageData.data;

        for (let p = 0; p < pixels.length; p += 4) {
            if (pixels[p + 3] === 0) {
                pixels[p] = r;
                pixels[p + 1] = g;
                pixels[p + 2] = b;

            }
            pixels[p + 3] = 255;
        }
        ctx.putImageData(imageData, 0, 0);
        return canvas.toDataURL('image/png');
    }
