This is a simple version of the bitmap transformer.  The program does:

1. Reads the bitmap file into a buffer.
2. Creates a JavaScript object from the buffer.
3. Manipulates the blue values of the buffer.
4. Writes to a new file.

Additional steps will be to add a CLI to allow the following tranformations: goBlue, goGreen, goRed, greyScale, colorInvert.
