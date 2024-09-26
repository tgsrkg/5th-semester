document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const resultsDiv = document.getElementById("results");
    const employees = document.querySelectorAll(".employee");
    
    // Обработка ввода в поле поиска
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.toLowerCase();
      resultsDiv.innerHTML = "";
  
      if (query.length > 0) {
        let matches = [];
  
        // Поиск сотрудников, соответствующих запросу
        employees.forEach(employee => {
          if (employee.dataset.name.toLowerCase().includes(query)) {
            matches.push(employee.dataset.name);
          }
        });
  
        // Отображение результатов поиска
        matches.forEach(match => {
          const resultItem = document.createElement("div");
          resultItem.classList.add("result-item");
          resultItem.textContent = match;
          resultsDiv.appendChild(resultItem);
          
          // Обработка клика на результат
          resultItem.addEventListener("click", function () {
            highlightEmployee(match);
          });
        });
      }
    });
  
    // Функция для разворачивания дерева и подсветки выбранного сотрудника
    function highlightEmployee(name) {
      // Скрыть все вложенные списки
      const sublists = document.querySelectorAll("ul");
      sublists.forEach(sublist => sublist.classList.add("hidden"));
  
      // Удалить подсветку с предыдущего выбранного сотрудника
      employees.forEach(employee => employee.classList.remove("highlight"));
  
      // Найти сотрудника по имени
      employees.forEach(employee => {
        if (employee.dataset.name === name) {
          // Развернуть дерево до сотрудника
          let parent = employee.parentElement;
          while (parent && parent.tagName !== "BODY") {
            if (parent.tagName === "UL") {
              parent.classList.remove("hidden");
            }
            parent = parent.parentElement;
          }
  
          // Подсветить выбранного сотрудника
          employee.classList.add("highlight");
        }
      });
    }
  });
  