/**
 * author: Caglayan Demirci
 *
 * @param <E> generic Element: primitive data type or object
 */

class Node<E> {

    private E element;
    private Node<E> next;
    private Node<E> prev;

    public E getElement() { return element; }
    public Node<E> getNext() { return next; }
    public Node<E> getPrev() { return prev; }

    public void setNext(Node<E> n) {
        this.next = n;
    }

    public Node(E element) {
        this.element = element;

    }
}

public class LinkedList<E> {
    /**
     * a simple generic doubly linked list class.
     * methods can be added.
     */

    private Node<E> head;
    private Node<E> tail;
    private int size;

    public Node<E> getHead() { return head; }
    public Node<E> getTail() { return tail; }
    public int getSize() { return size; }

    public void add(Node<E> n) {
        /**
         * default: adds elements at the tail.
         * can be implement in the class:
         * addHead()
         * addIndex()
         */
        if (size == 0) {
            head = n;
            tail = n;
        }
        else {
            tail.setNext(n);
            tail = n;
        }
        size++;
    }

    public void display() {
        /**
            only use for cases that element is not an object but
            primitive data type.
            otherwise prints object addresses.
         */
        Node cur = this.head;
        while (cur != null) {
            System.out.println(cur.getElement());
            cur = cur.getNext();
        }
    }

    public Node<E>[] arrayify() {
        Node<E>[] arr = new Node[size];
        Node cur = head;
        int i = 0;
        while (i < size) {
            arr[i] = cur;
            cur = cur.getNext();
            i++;
        }
        return arr;
    }

    public static void main(String[] args) {
        Node<Car> c1 = new Node<>(new Car("Tesla"));
        Node<Car> c2 = new Node<>(new Car("BMW"));
        Node<Car> c3 = new Node<>(new Car("VW"));

        LinkedList<Car> ll = new LinkedList<>();
        ll.add(c1);
        ll.add(c2);
        ll.add(c3);

        ll.display(); // prints addresses

        System.out.println();

        for (int i = 0; i < ll.getSize(); i++) {
            // prints data of the linked list properly
            System.out.println(ll.arrayify()[i].getElement().brand);
        }

        System.out.println();

        LinkedList<String> linkedListOfStrings = new LinkedList<>();
        linkedListOfStrings.add(new Node<>("String1"));
        linkedListOfStrings.add(new Node<>("String2"));

        linkedListOfStrings.display();

    }

}

class Car {
    public String brand;
    public Car(String brand) {
        this.brand = brand;
    }
}
