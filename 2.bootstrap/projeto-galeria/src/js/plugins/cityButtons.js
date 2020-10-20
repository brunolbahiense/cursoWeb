import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 400 //tempo do fadeout

function filterByCity (city){
    $('[wm-city]').each(function(i, e){ 
        const isTarget = $(this).attr('wm-city') === city
            || city === null // caso a cidade nao seja a mesma, não entrará na função 
        if(isTarget){ // gatilho da animação 
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function (){
    const cities = new Set
    $('[wm-city]').each(function (i, e){
        cities.add($(e).attr('wm-city'))
    })
    
    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)
        btn.click(e => filterByCity(city))
        return btn
    })
    
    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.click(e => filterByCity(null))
    
    btns.push(btnAll)
    
    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)
    $(this).html(btnGroup)
    return this
}

onLoadHtmlSuccess(function(){
    $('[wm-city-buttons]').cityButtons()
})