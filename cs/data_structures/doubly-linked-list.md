---
layout: data-structures-post
title: Doubly Linked List
---

An implementation of a doubly linked list in Java. Class is not generic, nodes contain a string for name and an integer for a value. 

<br>
<div class="code_source_name">DLL.java</div>
```java
public class DLL {

    public Node head;
    public Node tail;
    public int size;

    public DLL() {
        head = null;
        tail = null;
    }

    public void add(Node n) {
        if (size == 0) {
            head = n;
            tail = n;
        }
        else if (size == 1) {
            tail = n;
            head.next = tail;
            tail.prev = head;
        }
        else {
            tail.next = n;
            tail = n;
        }
        size++;
    }

    public void search(String name) {
        Node current = head;
        while (current != null) {
            if (current.getName().equals(name))
                System.out.println("yes!" + current.getValue());
            current = current.next;
        }
    }

    public void removeMiddle(int k) {
        int count = 0;
        Node current = head;
        Node removed = head;
        while (current != null) {
            if (count == k)
                break;
            current = current.next;
            removed = current;
            count++;
        }
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;
        removed = null;
        size--;
    }

    public String toString() {
        String s = "";
        Node current = head;
        while (current != null) {
            s += current.getName() + " " + current.getValue() + "\n";
            current = current.next;
        }
        return s;
    }
}
```

<div class="code_source_name">Node.java</div>
```java
public class Node {

    private String name;
    private int value;
    public Node next;
    public Node prev;

    // gets
    public String getName() {
        return name;
    }
    public int getValue() {
        return value;
    }

    // sets
    public void setName(String newName) {
        name = newName;
    }
    public void setID(int newValue) {
        value = newValue;
    }

    // constructor
    public Node(String name, int v) {
        this.name = name;
        this.value = v;
    }
}
```