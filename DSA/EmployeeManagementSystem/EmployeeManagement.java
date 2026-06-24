public class EmployeeManagement {

    Employee employees[] =
            new Employee[10];

    int count = 0;

    public void addEmployee(
            Employee employee) {

        employees[count] = employee;

        count++;
    }

    public void searchEmployee(
            int id) {

        for(int i=0;i<count;i++) {

            if(employees[i].employeeId
                    == id) {

                System.out.println(
                        employees[i].name);

                return;
            }
        }

        System.out.println(
                "Employee Not Found");
    }

    public void displayEmployees() {

        for(int i=0;i<count;i++) {

            System.out.println(
                    employees[i].employeeId
                            + " "
                            + employees[i].name);
        }
    }

    public void deleteEmployee(
            int id) {

        for(int i=0;i<count;i++) {

            if(employees[i].employeeId
                    == id) {

                for(int j=i;
                    j<count-1;
                    j++) {

                    employees[j]
                            = employees[j+1];
                }

                count--;

                break;
            }
        }
    }

    public static void main(
            String[] args) {

        EmployeeManagement system =
                new EmployeeManagement();

        system.addEmployee(
                new Employee(
                        101,
                        "Ashika",
                        "Analyst",
                        50000));

        system.addEmployee(
                new Employee(
                        102,
                        "Rahul",
                        "Developer",
                        60000));

        system.displayEmployees();

        system.searchEmployee(101);

        system.deleteEmployee(102);

        System.out.println(
                "After Deletion");

        system.displayEmployees();
    }
}
