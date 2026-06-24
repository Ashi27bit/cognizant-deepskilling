public class TaskManagement {

    Task head = null;

    public void addTask(Task newTask) {

        if(head == null) {
            head = newTask;
            return;
        }

        Task temp = head;

        while(temp.next != null) {
            temp = temp.next;
        }

        temp.next = newTask;
    }

    public void searchTask(int id) {

        Task temp = head;

        while(temp != null) {

            if(temp.taskId == id) {

                System.out.println(
                        "Task Found: "
                        + temp.taskName);

                return;
            }

            temp = temp.next;
        }

        System.out.println("Task Not Found");
    }

    public void displayTasks() {

        Task temp = head;

        while(temp != null) {

            System.out.println(
                    temp.taskId + " "
                    + temp.taskName + " "
                    + temp.status);

            temp = temp.next;
        }
    }

    public void deleteTask(int id) {

        if(head == null)
            return;

        if(head.taskId == id) {

            head = head.next;
            return;
        }

        Task temp = head;

        while(temp.next != null &&
              temp.next.taskId != id) {

            temp = temp.next;
        }

        if(temp.next != null) {

            temp.next = temp.next.next;
        }
    }

    public static void main(String[] args) {

        TaskManagement system =
                new TaskManagement();

        system.addTask(
                new Task(
                        1,
                        "Coding",
                        "Pending"));

        system.addTask(
                new Task(
                        2,
                        "Assignment",
                        "Completed"));

        system.displayTasks();

        system.searchTask(1);

        system.deleteTask(2);

        System.out.println("After Deletion");

        system.displayTasks();
    }
}
