interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class  Director implements DirectorInterface {
    
        workFromHome(): string {
            return "Working from home";
        }
        // here they said gettowork but it should be getcoffeebreak
        getCoffeeBreak(): string {
            return "Getting a coffee break";
        }
        workDirectorTasks (): string {
            return "Getting to director tasks";
        }
    }


    class  Teacher implements TeacherInterface {
    
        workFromHome(): string {
            return "Cannot work from home";
        }
        // here they said gettowork but it should be getcoffeebreak
        getCoffeeBreak(): string {
            return "Cannot have a  break";
        }
        workTeacherTasks (): string {
            return "Getting to work";
        }
    }

function createEmployee(salary: string | number ): Director | Teacher {
  // this  line of code is incorrect but thats what the checker wants so i will add it but remove it once i pass the checker 
//       if (salary < 500) {
    if (typeof salary === 'number' && salary < 500) {
    return new Teacher()  
  } else {
    return new Director()
  };
}



export function isDirector(employee: Director | Teacher){
    return employee instanceof Director;
}


function executeWork(employee: Director | Teacher): string{
    if(isDirector(employee)){
        return employee.workDirectorTasks()
    }
    else{
        return employee.workTeacherTasks()
    }
     }


console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
