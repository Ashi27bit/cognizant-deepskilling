import java.util.HashMap;

public class InventoryManagement {

    HashMap<Integer, Product> inventory =
            new HashMap<>();

    public void addProduct(Product product) {

        inventory.put(product.productId, product);
    }

    public void updateProduct(int id, int quantity) {

        if(inventory.containsKey(id)) {

            inventory.get(id).quantity = quantity;
        }
    }

    public void deleteProduct(int id) {

        inventory.remove(id);
    }

    public void displayProducts() {

        for(Product p : inventory.values()) {

            p.display();
        }
    }

    public static void main(String[] args) {

        InventoryManagement system =
                new InventoryManagement();

        system.addProduct(
                new Product(101,
                        "Laptop",
                        10,
                        50000));

        system.addProduct(
                new Product(102,
                        "Mouse",
                        25,
                        500));

        system.updateProduct(101,15);

        system.displayProducts();

        system.deleteProduct(102);

        System.out.println("After Deletion");

        system.displayProducts();
    }
}
