package myslef_test;

/**
 * Created by JobQ on 8/17/2016.
 */
public class ValorRef {
    public static void main(String[] args) {
        //value or reference
        int a = 3;
        test(a);
        System.out.println(a);

        String b = "abc";
        test(b);
        System.out.println(b+"\t"+b.hashCode());

        Cat c = new Cat();
        c.setName("test");
        test(c);
        System.out.println(c.getName());
    }

    public static void test(Cat c) {
        c.setName("test result");
    }

    public static void test(String d) {
        d = d.substring(1);
        System.out.println(d+"\t"+d.hashCode());
    }

    public static void test(int a) {
        a = a + 1;
    }
}
