$(document).ready(function() {
    const buttons = $('[data-tab-button]');
    const hamburguer = $('#hamburguer');
    const nav = $('.header_links');

    hamburguer.click(() => nav.toggleClass('active'));

    buttons.each(function() {
        $(this).click(function() {
            const abaAlvo = $(this).data('tabButton');
            const aba = $(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            removeBotaoAtivo();
            aba.addClass('shows_list--is-active');
            $(this).addClass('shows_tabs_button--is-active');
        });
    });

    function removeBotaoAtivo() {
        buttons.removeClass('shows_tabs_button--is-active');
    }

    function escondeTodasAbas() {
        const tabsContainer = $('[data-tab-id]');
        tabsContainer.removeClass('shows_list--is-active');
    }
});

    // document.addEventListener('DOMContentLoaded', function() {
    //     const buttons = document.querySelectorAll('[data-tab-button]');
    //     const hamburguer = document.querySelector("#hamburguer");
    //     const nav = document.querySelector(".header_links");
    
    //     hamburguer.addEventListener("click", () => nav.classList.toggle("active"));
    
    //     // Seção de atrações, programação das abas
    //     for (let i = 0; i <buttons.length; i++) {
    //         buttons[i].addEventListener('click', function(botao) {
    //             const abaAlvo = botao.target.dataset.tabButton;
    //             const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
    //             escondeTodasAbas();
    //             removeBotaoAtivo();
    //             aba.classList.add('shows_list--is-active');
    //             botao.target.classList.add('shows_tabs_button--is-active');
    //         })
    //     }
    // })
    
    // function removeBotaoAtivo() {
    //     const buttons = document.querySelectorAll('[data-tab-button]');
    
    //     for (let i = 0; i < buttons.length; i++) {
    //         buttons[i].classList.remove('shows_tabs_button--is-active');
    //     }
    // }
    
    // function escondeTodasAbas() {
    //     const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    //     for (let i = 0; i < tabsContainer.length; i++) {
    //         tabsContainer[i].classList.remove('shows_list--is-active');
    //     }
    // }