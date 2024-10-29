class User {
    constructor({name, surname, email, role}) {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.role = role;
      this.courses = [];
      this.messageHistory = [];
    }
  
    addCourse(course, level) {
      this.courses.push({course, level});
    }
  
    removeCourse(course) {
      this.courses = this.courses.filter(c => c.course !== course);
    }
  
    editCourse(course, level) {
      let courseToEdit = this.courses.find(c => c.course === course);
      if (courseToEdit) {
        courseToEdit.level = level;
      }
    }
  
    sendMessage(from, message) {
      this.messageHistory.push({from: from.email, to: this.email, message});
      this.sendEmail(from.email, this.email, message);
    }
  
    sendEmail(from, to, message) {
      // Simulamos el envío del correo electrónico
      console.log(`Email sent from ${from} to ${to}: ${message}`);
    }
  
    showMessagesHistory() {
      this.messageHistory.forEach(msg => {
        console.log(`${msg.from} -> ${msg.to}: ${msg.message}`);
      });
    }
  }
  
  const users = [];
  const userForm = document.getElementById('user-form');
  const usersList = document.getElementById('users');
  
  userForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
  
    const newUser = new User({name, surname, email, role});
    users.push(newUser);
    displayUsers();
  
    userForm.reset();
  });
  
  function displayUsers() {
    usersList.innerHTML = '';
    users.forEach((user, index) => {
      const userItem = document.createElement('li');
      userItem.textContent = `${user.name} ${user.surname} (${user.role}) - ${user.email}`;
      usersList.appendChild(userItem);
    });
  }
  