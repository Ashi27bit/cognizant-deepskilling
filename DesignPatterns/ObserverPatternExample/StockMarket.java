import java.util.ArrayList;

public class StockMarket implements Stock {

    private ArrayList<Observer> observers =
            new ArrayList<>();

    private double stockPrice;

    public void setStockPrice(double stockPrice) {
        this.stockPrice = stockPrice;
        notifyObservers();
    }

    public void registerObserver(Observer observer) {
        observers.add(observer);
    }

    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }

    public void notifyObservers() {

        for(Observer observer : observers) {
            observer.update(stockPrice);
        }
    }
}
