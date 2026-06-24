public class AdapterTest {

    public static void main(String[] args) {

        PaymentProcessor payment1 =
                new PayPalAdapter(new PayPalGateway());

        payment1.processPayment(500);

        PaymentProcessor payment2 =
                new StripeAdapter(new StripeGateway());

        payment2.processPayment(1000);
    }
}
