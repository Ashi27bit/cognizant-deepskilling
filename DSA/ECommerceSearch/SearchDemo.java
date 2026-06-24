public class SearchDemo {

    public static int linearSearch(
            Product products[],
            String name) {

        for(int i=0;i<products.length;i++) {

            if(products[i].productName
                    .equalsIgnoreCase(name)) {

                return i;
            }
        }

        return -1;
    }

    public static int binarySearch(
            Product products[],
            String name) {

        int low = 0;
        int high = products.length - 1;

        while(low <= high) {

            int mid = (low + high)/2;

            int result =
                    products[mid].productName
                            .compareToIgnoreCase(name);

            if(result == 0)
                return mid;

            else if(result < 0)
                low = mid + 1;

            else
                high = mid - 1;
        }

        return -1;
    }

    public static void main(String[] args) {

        Product products[] = {

                new Product(1,
                        "Keyboard",
                        "Electronics"),

                new Product(2,
                        "Laptop",
                        "Electronics"),

                new Product(3,
                        "Mouse",
                        "Electronics")
        };

        int index =
                linearSearch(products,
                        "Laptop");

        System.out.println(
                "Linear Search Index: "
                        + index);

        index =
                binarySearch(products,
                        "Mouse");

        System.out.println(
                "Binary Search Index: "
                        + index);
    }
}
