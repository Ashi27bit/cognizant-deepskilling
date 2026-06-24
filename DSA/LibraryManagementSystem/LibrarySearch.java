public class LibrarySearch {

    public static int linearSearch(
            Book books[],
            String title) {

        for(int i=0;i<books.length;i++) {

            if(books[i].title
                    .equalsIgnoreCase(title)) {

                return i;
            }
        }

        return -1;
    }

    public static int binarySearch(
            Book books[],
            String title) {

        int low = 0;
        int high = books.length - 1;

        while(low <= high) {

            int mid = (low + high) / 2;

            int result =
                    books[mid].title
                    .compareToIgnoreCase(title);

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

        Book books[] = {

                new Book(
                        1,
                        "C Programming",
                        "Dennis"),

                new Book(
                        2,
                        "Java",
                        "James"),

                new Book(
                        3,
                        "Python",
                        "Guido")
        };

        int index =
                linearSearch(
                        books,
                        "Java");

        System.out.println(
                "Linear Search Index: "
                + index);

        index =
                binarySearch(
                        books,
                        "Python");

        System.out.println(
                "Binary Search Index: "
                + index);
    }
}
