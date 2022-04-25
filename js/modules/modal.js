function hideModal(modalSelector) {
    const modalContent = document.querySelector(modalSelector);
    modalContent.classList.add('hide');
    modalContent.classList.remove('show');
    document.body.style.overflow = ''; // вернуть прокрутку
}

function showModal(modalSelector, modalTimerId) {
    const modalContent = document.querySelector(modalSelector);
    modalContent.classList.add('show');
    modalContent.classList.remove('hide');
    document.body.style.overflow = 'hidden'; // отменить прокрутку
    // console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);

    }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const btnsModal = document.querySelectorAll(triggerSelector),
        modalContent = document.querySelector(modalSelector);


    btnsModal.forEach(btn => {
        btn.addEventListener('click', () => showModal(modalSelector, modalTimerId));
    });

    modalContent.addEventListener('click', (e) => { //скрыть модалку нажав на подложку
        if (e.target === modalContent || e.target.getAttribute('data-close') == '') {
            hideModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalContent.classList.contains('show')) { //закрыть модалку на клавишу ескейп
            hideModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export { hideModal };
export { showModal };