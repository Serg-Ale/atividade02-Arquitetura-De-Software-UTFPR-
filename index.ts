interface EmployeeComponent {
  getSalary(): number;
}

class EmployeeLeaf implements EmployeeComponent {
  constructor(private salary: number) {}

  getSalary(): number {
    return this.salary;
  }
}

class DepartmentComposite implements EmployeeComponent {
  private employees: EmployeeComponent[] = [];

  addEmployee(...employees: EmployeeComponent[]): void {
    employees.forEach((employee) => this.employees.push(employee));
  }

  removeEmployee(employee: EmployeeComponent): void {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  getSalary(): number {
    let totalSalary = 0;
    for (const employee of this.employees) {
      totalSalary += employee.getSalary();
    }
    return totalSalary;
  }
}

// Testing the implementation
const john = new EmployeeLeaf(3000);
const jane = new EmployeeLeaf(3500);

const developmentDept = new DepartmentComposite();
developmentDept.addEmployee(john, jane);

const manager = new EmployeeLeaf(5000);

const managementDept = new DepartmentComposite();
managementDept.addEmployee(manager, developmentDept);

console.log("Total organization salary:", managementDept.getSalary());
