Claro! Abaixo está o README.md traduzido para o Português-BR:

---

# Padrão de Projeto Composite

## Exercício proposto
![image](https://github.com/Serg-Ale/atividade02-Arquitetura-De-Software-UTFPR-/assets/74671270/69658816-d4cc-4a41-9482-aa5a7b474fad)


## Visão Geral

O padrão Composite é um padrão de design estrutural que permite compor objetos em estruturas de árvore para representar hierarquias de parte-inteiro. Esse padrão permite que os clientes tratem objetos individuais e composições de objetos de forma uniforme.

Neste exemplo, estamos modelando uma estrutura organizacional onde os funcionários podem ser indivíduos ou departamentos. Cada departamento pode conter funcionários individuais ou subdepartamentos. Usaremos o padrão Composite para representar essa hierarquia.

## Explicação do Código

### Classes:

- **EmployeeComponent**: Interface que define as operações comuns para funcionários individuais e departamentos.
- **EmployeeLeaf**: Classe que representa funcionários individuais. Implementa a interface `EmployeeComponent`.
- **DepartmentComposite**: Classe que representa departamentos. Pode conter uma lista de objetos `EmployeeComponent`, permitindo atuar tanto como um funcionário individual quanto como um contêiner para outros funcionários ou subdepartamentos.

### Métodos:

- **addEmployee(...employees: EmployeeComponent[]): void**: Adiciona um ou mais funcionários ou departamentos ao composto do departamento.
- **removeEmployee(employee: EmployeeComponent): void**: Remove um funcionário ou departamento do composto do departamento.
- **getSalary(): number**: Calcula e retorna o salário total de todos os funcionários dentro do composto do departamento, incluindo funcionários dentro de subdepartamentos.

### Testando a Implementação:

Criamos funcionários individuais usando a classe `EmployeeLeaf` e departamentos usando a classe `DepartmentComposite`. Adicionamos funcionários e subdepartamentos aos departamentos usando o método `addEmployee`. Finalmente, calculamos o salário total da organização usando o método `getSalary`.

```typescript
const john = new EmployeeLeaf(3000);
const jane = new EmployeeLeaf(3500);

const developmentDept = new DepartmentComposite();
developmentDept.addEmployee(john, jane);

const manager = new EmployeeLeaf(5000);

const managementDept = new DepartmentComposite();
managementDept.addEmployee(manager, developmentDept);

console.log("Salário total da organização:", managementDept.getSalary());
```

## Conclusão

O padrão Composite é útil ao lidar com estruturas semelhantes a árvores onde objetos individuais e composições de objetos precisam ser tratados uniformemente. Simplifica o código do cliente ao permitir que ele trabalhe com estruturas complexas usando uma interface uniforme. Neste exemplo, demonstrei como usar o padrão Composite para representar uma hierarquia organizacional e realizar operações nela de forma transparente.
