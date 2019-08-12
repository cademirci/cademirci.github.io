## Java İle Quadtree Kullanarak Görsel Analizi

Gerekli olan bütün bilgiler şu pdf'ten okunabilir: [Assignment4SM19.pdf](https://github.com/caglayandemirci/QuadtreeJava/blob/master/hw4SM19.pdf)

Program uzun süre çalışıyor, muhtemelen çok fazla String analizi kodu yazdığım için. Umarım bir ara bu koda geri dönüp bir iyileştirme yapacağım. Upgrade geldiği zaman buraya onu da not ederim.

Görev ile birlikte verilen PPM görsel dosyası olan kız çocuğu resmi:

![](https://ibb.co/PQmQRrf)

Resmi programı çalıştırarak analiz ettiğimde ortaya çıkan görseller ise şunlar (program tam istediğim şekilde çalışıyor):

![](https://ibb.co/R7Rpzfm)

![](https://ibb.co/R9VKbMJ)

![](https://ibb.co/gvFsftv)

![](https://ibb.co/HNzMstV)

![](https://ibb.co/4SfBjt8)

![](https://ibb.co/c1QpKTd)

![](https://ibb.co/Dgfbbj9)

![](https://ibb.co/51yMHdp)

Bu program temelinde istenen şekilde filtreleme yapılabilir. Ben bir monochromatic (grileştirme / siyah-beyazlaştırma, *Greyscale*) bir de negatifleştirme yazdım.

![](https://ibb.co/9y1fpy0)

![](https://ibb.co/nwqvMvV)

Bir de edge detection diye bir işlem var, bu da kayda değer bir data değişikliği olduğunda görselin ilgili kısımlarını beyaz ile işaretliyor. Bu işlem, büyük görsel datalarını analiz eden programlar için (yani *introduction to big data science on images* desek abartmış olmayız) kullanılabiliyor.

![](https://ibb.co/1J9wqqF)

README ve kodlar:

**README.txt**:

    Name:

        R. Çağlayan Demirci

    Compilation and run:

        Standart java compilation with the main class name which is Driver.java, with 5
        arguments.

            ~$ javac *.java

        As arguments, it is essential that number of them will be exactly 5, as follows:
        - An input file name which is the .ppm format image, exactly after a flag -i.
        Input file must contain ".ppm" at the end.
        - An output file name, exatcly after a flag -o. This sould not be appended by ".ppm"
        - To get 8 compressed versions of the image, one of the arguments must be -c
        - To get edge-detected version of the image, one of the arguments must be -e
        IMPORTANT: -c and -e must not be used together. Each command has to contain one
        of them each time.
        - Order of the flags do not matter, as long as -i and -o are followed by their
        proper file names.
        So:

            ~$ java Driver -i inputExample.ppm -c -o -outputExample
            ~$ java Driver -i inputExample.ppm -e -o -outputExample

    Known bugs and limitations:

        - Program execution takes a very long time. For instance, getting 8 compressed
        versions of a 512x512 file takes approximately 10-16 minutes (i7 CPU). It means one
        process, including edge detection, takes nearly 1-2 minutes.
        - I did not control how many times or how many depth node I get while printing 8
        compressed files. Program, prints automatically 4, 4^2, 4^3... 4^8 smallest necessary
        squares. That means, if the image is small enough, at some point program may prints
        images that have same resolution. Or, in the opposite situation, even 8th version
        could not reach the highest resolution (the case that tree's smallest square = 1 pixel).
        But all can be handled. 4^j values in the for loop can be changed in my Driver
        program where the part beginning "j values can be changed willingly". It is 1<=j<9 by
        default.
        - Threshold value is 5 by default. Prints proper images when it is like that. It can
        be changed, either.

    Contents:

        - Driver.java: Main method of the program.
        - QuadTree.java: QuadTree class, Node inner class, their methods.
        - Image.java: Image class, Pixel inner class, their methods.
        - ExampleOutputs: A directory that includes 12 .ppm files I have tested my program with
          a ppm image. One of the files is the original one, and the results are; one greyscaled,
          one negative, one edge detected, and 8 of compressed versions of the original file going
          from the lowest resolution to the highest, 1 to 8.
        - README.txt

**QuadTree.java**:

```java
public class QuadTree {

    private Image img;
    private Node root;
    private static String tree_data;


    public QuadTree(Image img) {
        this.img = img;

        // matrix index starts with 0, thus (get dimension - 1)
        int dimension = img.getDimension() - 1;

        // image will be given as square
        // so no need for height and width, just dimension instead
        root = new Node(0,0, dimension, dimension);
        root.parent = null;
    }

    public void divide(int threshold) {
        rec_divide(root, threshold);
    }
    private void rec_divide(Node n, int t) {
        // assist function for divide:
        // recursive divide method

        if (n != null) {
            if (n.i1 != n.i2 && n.j1 != n.j2) {
                if (n.isExternal()) {

                    // asks image class if this is necessary or not
                    if (img.decider_by_threshold(t, n.i1, n.j1, n.i2, n.j2))
                        n.divide_node();
                }
                rec_divide(n.nw, t);
                rec_divide(n.sw, t);
                rec_divide(n.ne, t);
                rec_divide(n.se, t);
            }
        }
    }


    public Image compress(int depth, String output_file_name) {
        return img.compress(tree_data_by_depth(depth), depth, output_file_name);
    }

    private String tree_data_by_depth(int depth) {
        tree_data = "";
        rec_tree_data_by_depth(root, depth);
        return tree_data;
    }
    private void rec_tree_data_by_depth(Node n, int depth) {
        // assist function for tree_data_by_depth:
        // recursive displaying index data of the tree by depth method

        if (n != null) {
            if (depth(n) <= depth)
                tree_data += n.i1 + " " + n.j1 + " " +
                             n.i2 + " " + n.j2 + "\n";
            rec_tree_data_by_depth(n.nw, depth);
            rec_tree_data_by_depth(n.ne, depth);
            rec_tree_data_by_depth(n.sw, depth);
            rec_tree_data_by_depth(n.se, depth);
        }

    }
    private int depth(Node n) {
        // actually a node method
        if (n == root)
            return 0;
        return 1 + depth(n.parent);
    }

    public int height() {
        // assumed depth(root) is 0
        // thus 4^(tree.height()) is #of Pixels
        Node n = root;
        int count = 0;
        while (n.isInternal()) {
            n = n.nw;
            count++;
        }
        return count;
    }

    public void display() {
        rec_display(root);
    }
    private void rec_display(Node n) {
        // assist function for display:
        // recursive display method

        if (n != null) {
            System.out.println(n);
            rec_display(n.nw);
            rec_display(n.sw);
            rec_display(n.ne);
            rec_display(n.se);
        }
    }


    private class Node {
        // holds basically four integers as (i1, j1), (i2, j2)
        // those represent northwest and southeast indexes
        // (in the matrix in Image class) of the sub image.

        private int i1, i2, j1, j2;
        private Node parent;
        private Node nw, ne, sw, se;

        public Node(int i1, int j1, int i2, int j2) {
            this.i1 = i1;
            this.i2 = i2;
            this.j1 = j1;
            this.j2 = j2;
        }

        void divide_node() {
            Node nw = new Node(i1, j1, (i1 + i2) / 2, (j1 + j2) / 2);
            Node ne = new Node(i1, (j1 + j2) / 2 + 1, (i1 + i2) / 2, j2);
            Node sw = new Node((i1 + i2) / 2 + 1, j1, i2, (j1 + j2) / 2);
            Node se = new Node((i1 + i2) / 2 + 1, (j1 + j2) / 2 + 1 , i2, j2);
            this.nw = nw;
            this.ne = ne;
            this.sw = sw;
            this.se = se;
            nw.parent = this;
            ne.parent = this;
            sw.parent = this;
            se.parent = this;
        }

        boolean isExternal() { return this.nw == null; }
        boolean isInternal() { return !this.isExternal(); }

        @Override
        public String toString() {
            return depth(this) +" (" + i1 + "," + j1 + "), "  + "(" + i2 + ", " + j2 +")";
        }
    }

}
```

**Image.java**:

```java
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintWriter;
import java.util.Scanner;

public class Image {
    private boolean format_is_P3;
    private int height;
    private int width;
    private Pixel[][] matrix;
    public String file_name;

    public Pixel[][] getMatrix() { return matrix; }

    // the image will be square
    public int getDimension() { return height; }

    // sets one pixel each time
    // instead implementing nonsense "setMatrix"
    public void setPixel(int i, int j, int r, int g, int b) {
        Pixel p = new Pixel(i,j,r,g,b);
        matrix[i][j] = p;
    }


    public Image(int height, int width) {
        format_is_P3 = true;
        this.height = height;
        this.width = width;
        matrix = new Pixel[height][width];
    }

    public Image(String file_name) {
        this.file_name = file_name;
        Scanner s = null;
        try {

            // I tried to read file via BufferedReader.readLine()
            // but it came up with exception because
            // huge file lines can be broken in some instances
            // so I read and write all files by Scanner class
            // to use hasNext()
            s = new Scanner(new FileInputStream(file_name));
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }

        // implementing image features
        this.format_is_P3 = s.next().equals("P3");
        if (!format_is_P3) {
            System.out.println(
                    "image is not .ppm P3 format!\n"
            );
            System.exit(0);
        }
        width = s.nextInt();
        height = s.nextInt();
        matrix = new Pixel[height][width];
        s.nextInt(); // 255

        while (s.hasNext()) {
            for (int i = 0; i < width; i++) {
                for (int j = 0; j < height; j++) {
                    Pixel p = new Pixel(s.nextInt(), s.nextInt(), s.nextInt());
                    p.i = i; p.j = j;
                    matrix[i][j] = p;
                }
            }
        }
    }

    public String disturb() {
        // re-spreading the contents of the Image pixels with
        // picked data as [i][j] rgb(r,g,b) as "r g b" only.
        // so we can get .ppm format again. (for the new Image)
        String content = "P3\n" +
                         height + " " + width +
                         "\n255\n"; // first three lines

        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                content += "" + matrix[i][j].r + " " +
                                matrix[i][j].g + " " +
                                matrix[i][j].b + " ";
            }
            content += "\n";
        }

        return content;
    }


    public boolean decider_by_threshold(int threshold, int i1, int j1, int i2, int j2) {
        // sends a boolean value to divide method in
        // QuadTree class to decide if it is necessary that
        // divide the current sub image (node) or not

        int meanR = 0, meanG = 0, meanB = 0, error = 0;
        int area = (i2-i1)*(j2-j1);

        // computing average of the square
        for (int i = i1; i < i2; i++) {
            for (int j = j1; j < j2; j++) {
                Pixel p = matrix[i][j];
                meanR += p.r;
                meanG += p.g;
                meanB += p.b;
            }
        }
        meanR /= area;
        meanG /= area;
        meanB /= area;
        // now mean color is rgb(meanR, meanG, meanB)

        for (int i = i1; i < i2; i++) {
            for (int j = j1; j < j2; j++) {
                Pixel p = matrix[i][j];
                error += (int) Math.pow(p.r - meanR, 2);
                error += (int) Math.pow(p.g - meanG, 2);
                error += (int) Math.pow(p.b - meanB, 2);
            }
        }
        error /= area;

        return error > threshold;
    }

    public Image compress(String tree_data, int depth, String output_file_name) {
        // takes index data of the squares as big as possible according
        // to the threshold value aand fill them the mean color of the
        // pixels within

        // may be this piece of code is necessary, however it is
        // written that exactly 8 new images will be given as output.
        // so if the original image is small enough, it prints images
        // which have the same resolution.
        /*if (Math.pow(4, depth) == height)
            return this;*/

        Image compressed = new Image(height,width);
        String[] ar = tree_data.split("\n");

        for (int line = 0; line < ar.length; line++) {
            Scanner s = new Scanner(ar[line]);
            int i1 = s.nextInt();
            int j1 = s.nextInt();
            int i2 = s.nextInt();
            int j2 = s.nextInt();

            Pixel mean = new Pixel();
            int meanR = 0, meanG = 0, meanB = 0;

            int count = 0;
            for (int i = i1; i < i2; i++) {
                for (int j = j1; j < j2; j++) {
                    Pixel p = matrix[i][j];
                    meanR += p.r;
                    meanG += p.g;
                    meanB += p.b;
                    count++;
                }
            }
            meanR /= count;
            meanG /= count;
            meanB /= count;
            mean.r = meanR;
            mean.g = meanG;
            mean.b = meanB;
            for (int i = i1; i < i2; i++) {
                for (int j = j1; j < j2; j++) {
                    compressed.matrix[i][j] = mean;
                }
            }
        }

        // to avoid null lines, I fill them black
        // if they exist
        for (int i = 0; i < height; i++)
            for (int j = 0; j < width; j++)
                if (compressed.matrix[i][j] == null)
                    compressed.matrix[i][j] = new Pixel(12,12,12);

        try {
            PrintWriter p = new PrintWriter(new FileOutputStream(output_file_name));
            p.write(compressed.disturb());
            p.close();
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }

        return compressed;
    }

    // optional part
    public Image edge_detection(String output_file_name) {
        Image sharpened = new Image(height, width);
        for (int i = 0; i < height; i++) {
            // for avoiding null pixels, I fill border pixels which
            // have not 8 neighbours, with black

            // border-top
            sharpened.matrix[0][i] = new Pixel(0,i,0,0,0);
            // border-left
            sharpened.matrix[i][0] = new Pixel(i,0,0,0,0);
            // border-right
            sharpened.matrix[i][height-1] = new Pixel(0,height-1,0,0,0);
            // border-bottom
            sharpened.matrix[height-1][i] = new Pixel(height-1,i,0,0,0);
        }
        for (int i = 1; i < height - 1; i++) {
            for (int j = 1; j < width - 1; j++) {
                Pixel pr = new Pixel();   // pixel of the new (sharpened) image
                Pixel[] ar = new Pixel[8];
                Pixel old = matrix[i][j]; // pixel of the old one

                                          // neighbours:
                ar[0] = matrix[i][j+1];   // right
                ar[1] = matrix[i][j-1];   // left
                ar[2] = matrix[i-1][j];   // top
                ar[3] = matrix[i+1][j];   // bottom
                ar[4] = matrix[i+1][j-1]; // bottom-left
                ar[5] = matrix[i+1][j+1]; // bottom-right
                ar[6] = matrix[i-1][j+1]; // top-right
                ar[7] = matrix[i-1][j-1]; // top-left

                // here there is a problem.
                boolean different = false;
                for (int k = 0; k < ar.length; k++) {
                    different = (Math.abs(ar[k].r - old.r) > 5) &&
                                (Math.abs(ar[k].g - old.g) > 5) &&
                                (Math.abs(ar[k].b - old.b) > 5);
                }
                if (different) {
                    pr.i = i;
                    pr.j = j;
                    pr.r = 255;
                    pr.g = 255;
                    pr.b = 255;
                    sharpened.matrix[i][j] = pr;
                }
                else {
                    pr.i = i;
                    pr.j = j;
                    pr.r = 0;
                    pr.g = 0;
                    pr.b = 0;
                    sharpened.matrix[i][j] = pr;
                }
            }
        }

        try {
            PrintWriter p = new PrintWriter(new FileOutputStream(output_file_name));
            p.write(sharpened.disturb());
            p.close();
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }

        return sharpened;
    }

    @Override
    public String toString() {
        String display = "";
        if (format_is_P3)
            display += "P3\n";
        display += "width: " + width + ", ";
        display += "height: " + height + "\n";
        for (int i = 0; i < width; i++) {
            for (int j = 0; j < height; j++)
                display += matrix[i][j] + " ";
            display += "\n";
        }
        return display;
    }


    private class Pixel {
        private int r;
        private int g;
        private int b;
        private int i;
        private int j;

        public Pixel() { r = 0; g = 0; b = 0; }

        public Pixel(int red, int green, int blue) {
            r = red;
            g = green;
            b = blue;
        }

        public Pixel(int i, int j, int red, int green, int blue) {
            this.i = i;
            this.j = j;
            r = red;
            g = green;
            b = blue;
        }

        @Override
        public String toString() {
            // coordinates
            // plus traditional rgb format color representation in CSS
            // for instance, first pixel black: [0,0] rgb(0,0,0)
            return  "[" + i + "," + j + "] " +
                    "rgb(" + r + "," + g + "," + b + ")";
        }
    }







    // from this point, there are some extra codes. Even if they are not
    // necessary for the task, I have learned a great deal from these.
    // If any, they were fun. They can be used later.
    //
    // greyscale and negative mean clear.
    // compress_half, compresses the image by size. it makes for instance
    // 512x512 image 256x256 while removing meaningful data of the
    // original file as minimum as possible.


    public Image greyscale(String output_file_name) {
        Image monochromatic = new Image(height, width);
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                Pixel pm = new Pixel();   // pixel of the new (monochromatic) image
                Pixel old = matrix[i][j]; // pixel of the old one
                pm.i = i;
                pm.j = j;
                pm.r = (old.r + old.g + old.b) / 3;
                pm.g = (old.r + old.g + old.b) / 3;
                pm.b = (old.r + old.g + old.b) / 3;
                monochromatic.matrix[i][j] = pm;
            }
        }
        try {
            PrintWriter p = new PrintWriter(new FileOutputStream(output_file_name));
            p.write(monochromatic.disturb());
            p.close();
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }

        return monochromatic;
    }

    public Image negative(String output_file_name) {
        Image reversed = new Image(height, width);
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                Pixel pr = new Pixel();   // pixel of the new (reversed) image
                Pixel old = matrix[i][j]; // pixel of the old one
                pr.i = i;
                pr.j = j;
                pr.r = 255 - old.r;
                pr.g = 255 - old.g;
                pr.b = 255 - old.b;
                reversed.matrix[i][j] = pr;
            }
        }

        try {
            PrintWriter p = new PrintWriter(new FileOutputStream(output_file_name));
            p.write(reversed.disturb());
            p.close();
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }

        return reversed;
    }

    public Image compress_half(String index_data, String output_file_name) {
        // 0 0 1 1  nw      4x4 image
        // 0 2 1 3  ne
        // 2 0 3 1  sw
        // 2 2 3 3  se

        Image compressed = new Image(this.height / 2, this.width / 2);
        String[] arr = index_data.split("\n");
        for (int i = 0; i < arr.length; i++) {
            Scanner s = new Scanner(arr[i]);
            int ic = s.nextInt(),   // i of the non-compressed
                    jc = s.nextInt();   // j of the non-compressed
            Pixel pc = new Pixel(); // the new single one pixel of the compressed image
            // which is made as mixed of those quadruple of the
            // old one.

            int newRed = this.matrix[ic][jc].r +
                    this.matrix[ic + 1][jc].r +
                    this.matrix[ic][jc + 1].r +
                    this.matrix[ic + 1][jc + 1].r;
            newRed /= 4;

            int newGreen = this.matrix[ic][jc].g +
                    this.matrix[ic + 1][jc].g +
                    this.matrix[ic][jc + 1].g +
                    this.matrix[ic + 1][jc + 1].g;
            newGreen /= 4;

            int newBlue = this.matrix[ic][jc].b +
                    this.matrix[ic + 1][jc].b +
                    this.matrix[ic][jc + 1].b +
                    this.matrix[ic + 1][jc + 1].b;
            newBlue /= 4;

            pc.r = newRed;
            pc.g = newGreen;
            pc.b = newBlue;
            int newI = ic / 2, // i of the compressed
                    newJ = jc / 2; // j of the compressed
            pc.i = newI;
            pc.j = newJ;

            compressed.matrix[pc.i][pc.j] = pc;
        }

        try {
            PrintWriter p = new PrintWriter(new FileOutputStream(output_file_name));
            p.write(compressed.disturb());
            p.close();
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }

        return compressed;

    }
}
```

**Drvier.java** (*main class*):

```java
public class Driver {
    public static void main(String[] args) {
        String input_file = "", output_file = "";

        for (int i = 0; i < 5; i++) {
            if (args[i].equals("-i"))
                input_file = args[i+1];
            if (args[i].equals("-o"))
                output_file = args[i+1];
        }

        Image img = new Image(input_file);
        QuadTree qt = new QuadTree(img);

        // takes threshold as parameter
        qt.divide(5);

        String output_file_name = "";

        for (int i = 0; i < 5; i++) {
            if (args[i].equals("-c")) {

                // j values can be changed willingly
                // 0 is image itself, 1 appears 4 squares (node depths 1)
                // so on.
                for (int j = 1; j < 9; j++) {
                    output_file_name = output_file + "-" + j + ".ppm";
                    // takes time
                    System.out.println("Processing... Please wait");
                    qt.compress(j, output_file_name);
                    System.out.println("Process finished succesfully.");
                }
            }
            if (args[i].equals("-e")) {
                System.out.println("Processing... Please wait");
                img.edge_detection(output_file + ".ppm");
                System.out.println("Process finished succesfully.");
            }
        }
    }
}
```
