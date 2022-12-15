// {/* <div class="vezife-item vezife-tamamlandi"> */}
//                     <li class="vezife-tanitim">Idmana get</li>
//                     <button class="vezife-btn vezife-btn-tamamlandi" ><i class="fa fa-check" aria-hidden="true"></i></button>
//                    <button class="vezife-btn vezife-btn-sil"><i class="fa fa-trash" aria-hidden="true"></i></button>
//                  </div>
const newToDoInput = document.querySelector('.input-vezife')

const addToDoBtn = document.querySelector('.btn-vezife-elaveet')

const todoContainer = document.querySelector('.vezife-siyahisi')

addToDoBtn.addEventListener('click', addTodo)

function addTodo(e) {
    e.preventDefault()
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('vezife-item')

    const todoLi = document.createElement('li')
    todoLi.classList.add('vezife-tanitim')
    todoLi.innerText = newToDoInput.value

    todoDiv.appendChild(todoLi)

    const editBtn = document.createElement('button')

    editBtn.classList.add('vezife-btn')
    editBtn.classList.add('vezife-btn-tamamlandi')

    editBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'

    todoDiv.appendChild(editBtn)





    todoContainer.appendChild(todoDiv)
}