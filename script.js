// your code goes here
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const enrollBtns = document.querySelectorAll('.enroll-btn');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('enroll-form');

    // Открытие модального окна
    enrollBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие по клику вне модального окна
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Обработка формы
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const course = document.querySelector('.enroll-btn[data-course]').dataset.course;
        const formData = new FormData(form);
        
        // Здесь должна быть логика отправки данных на сервер
        alert(`Заявка на курс "${course}" отправлена! Мы свяжемся с вами в ближайшее время.`);
        form.reset();
        modal.style.display = 'none';
    });
});
