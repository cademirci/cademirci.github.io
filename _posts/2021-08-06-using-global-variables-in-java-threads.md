---
layout: post
title: Using Global Variables in Java Threads
excerpt: >-
    A little trick while writing threads in Java, actually a Java Threads note for the blog.
tags: [java, threads, general programming, non blocking systems]
category: Software
---

I thought it is a brief time to write a Java Thread note down to my blog, so here we are.

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main extends Thread {
  public static int columnNumber = 0;
  public static double max = 0.0, sum = 0.0;
  public static void main(String[] args) {
    int columnCount = readFile("ornek.txt").split("\n")[0].length() - 
                      readFile("ornek.txt").split("\n")[0].replaceAll(" ", "").length()
                      + 1
    ; // that means there are 3 columns in a matris where rows have 
      // 2 whitespaces each, like "12 42 9", (a little bit dirty code.)
    for (int i = 0; i < columnCount; i++) {
      Main thread = new Main();
      thread.start();
      while(thread.isAlive()) {
        // do nothing, just wait.
      }
    }

    System.out.println("max number: " + max);
    System.out.println("sum of the matris: " + sum);
  }

  public void run() {
    String[] rows = readFile("ornek.txt").split("\n");
    for (int i = 0; i < rows.length; i++) {
      String[] numbersInARow = rows[i].split(" ");
      double currentNumber = Double.parseDouble(numbersInARow[columnNumber]);
      if (max < currentNumber) {
        max = currentNumber;
      }
      sum += currentNumber;
    }
    columnNumber++;
  }

  public static String readFile(String fileName) {
    BufferedReader reader;
    String fileContent = "", line = "";
    try {
      reader = new BufferedReader(new FileReader(fileName));
      while ((line = reader.readLine()) != null) {
        fileContent += line + "\n";
      }
      reader.close();
    } catch(IOException e) {
      e.printStackTrace();
    } 
    return fileContent;
  }
}
```

This code prints the sum of the numbers in a matris which is given in a txt file and finds the maximum number among them. The point is, it divides the matris into threads (where thread number is #of columns) while doing the computing.

Java threads are dangerous when we want to use attributes or global variables. I want to that `columnNumber` refers to current column of the matris with an order 0, then 1, then 2... But if we mess the essence of threads, we can face a chaos like that while CPU is computing a column where suddenly another threads starts before the interpreter sees the `columnNumber++`. Such an event comes up with computing the same columns at the same time. 

To be simple; it is not certain that java goes like "0 1 2" (we want this), or "0 1 1", "1 2 2" so on.

In order to avoid that, we can simply add an empty loop like above (and below now).

```java
while (thread.isAlive()) {
  // do nothing, just wait.
}
```

Additionally, this is also related to the answer of why do we prefer modern non-blocking (by default) systems like NodeJS or how does threads work in such systems. This is the topic of an another article. 

I will take a look to this post if I need to a rare time like now that I need to write Java thread code. I hope it is also helpful for you. 