/* 

Create a menu app as seen in this week’s video.
 What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.

*/

class Child {
    constructor(nameChild ,ageChild){
    this.nameChild = nameChild;
    this.ageChild = ageChild;
    }

    describe(){
        console.log(`${this.nameChild} is a child and is ${this.ageChild}`);
    }
}


class Parent {
    constructor(name){
        this.name = name;
        this.children = [];
        }
        addChild(child){
            this.child.push(child)
        }
        describe(){
            console.log(`${this.name} has ${this.children.length} children`);
        }
}

class Menu{
    constructor(){
        this.parent = [];
        this.selectedParent = null;
    }

start (){
    let selection = this.showOptions();
    while (selection != 0){
        switch (selection){
            case '1':
                this.createParent();
            break;
            case '2':
                this.viewParent();
            break;
            case '3':
                this.deleteParent();
            default:
            selection = 0;
        }
    selection = this.showOptions();
    }
    alert ('OK Bye!');
    }

    showOptions() {
        return prompt(`
            0. Exit
            1. Create parent
            2. View parent
            3. Delete parent
        `);
}

    showChildOptions(familyInfo){
        return prompt(`
            1. add a child
            2. delete a child
            0. back

             ${familyInfo}
            `);  
    }

    createParent(){
        let name = prompt('Enter name for new parent');
        this.parent.push(new Parent(name))
    }

    viewParent(){
        let index = prompt('What parent do you want to view?');
        if (index > -1 && this.parent.length){
            this.selctedParent = this.parent[index];
            let description = `Parent is:${this.selectedParent.name}`;
            description += ' ' + this.selectedParent.describe() + '\n ';
            for(let i = 0; i < this.selectedParent.children.length; i++){
                description += i + '.' + this.selectedParent.children[i].describe();
            }
                let selection1 = this.showChildOptions(description);
                switch (selection1){
                    case '1':
                        this.createChild();
                    break;
                    case '2':
                        this.deleteChild();
                }
            }
        }
        deleteParent(){
            let index = prompt('Enter the parent you wish to delete.');
            if (index > -1 && index < this.parent.length){
                this.parent.splice(index, 1);
            }
        }

        createChild(){
            let nameChild = prompt('Enter name of new child.');
            let ageChild = prompt ('Enter the age of the child.');
            this.selectedParent.addChild(new Child(nameChild, ageChild));
        }
        deleteChild(){
            let index = prompt('Enter the name of the child you want to delete.');
            if(index > -1 && index < this.selectedParent.children.length){
                this.selectedParent.children.splice(index,1);
            }
        }
    }

let menu = new Menu();
menu.start();

