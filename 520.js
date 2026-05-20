const gameSection = document.getElementById('gameSection')
const guessInput = document.getElementById('guessInput')
const guessSubmit = document.getElementById('guessSubmit')
const gameHint = document.getElementById('gameHint')
const gameAttempts = document.getElementById('gameAttempts')
const targetNum = 520
let attempts = 0

document.querySelector('.button').addEventListener('click', function() {
  gameSection.classList.add('active')
  this.style.display = 'none'
  guessInput.focus()
  window.scrollTo({ top: gameSection.offsetTop - 20, behavior: 'smooth' })
})
document.querySelector('.button').addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    this.click()
  }
})

function handleGuess() {
  const val = parseInt(guessInput.value, 10)
  if (isNaN(val) || val < 0 || val > 666) {
    gameHint.className = 'game-hint too-big'
    gameHint.textContent = '请输入 0~666 之间的数字'
    return
  }

  attempts++
  gameAttempts.textContent = '已猜 ' + attempts + ' 次'

  if (val === targetNum) {
    gameHint.className = 'game-hint correct'
    gameHint.textContent = '🎉 恭喜你猜对了！'
    guessInput.disabled = true
    guessSubmit.disabled = true
    guessSubmit.style.opacity = '0.5'
    guessSubmit.style.cursor = 'default'

    const successDiv = document.createElement('div')
    successDiv.className = 'game-success active'
    successDiv.innerHTML = '<p>挑战成功！奖励已解锁 ✨</p>'
    gameSection.appendChild(successDiv)

    setTimeout(() => {
      const main = document.querySelector('.main')
      main.style.display = 'block'
      requestAnimationFrame(() => {
        main.classList.add('visible')
      })
      const footer = document.querySelector('.footer')
      footer.style.display = 'block'
      requestAnimationFrame(() => {
        footer.classList.add('visible')
      })
      window.scrollTo({ top: main.offsetTop - 20, behavior: 'smooth' })
    }, 1500)
  } else if (val > targetNum) {
    gameHint.className = 'game-hint too-big'
    gameHint.textContent = '↑ 太大了，往小猜'
  } else {
    gameHint.className = 'game-hint too-small'
    gameHint.textContent = '↓ 太小了，往大猜'
  }

  guessInput.value = ''
  guessInput.focus()
}

guessSubmit.addEventListener('click', handleGuess)
guessInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    handleGuess()
  }
})

const boxes = document.querySelectorAll('.box')
boxes.forEach(box => {
  box.addEventListener('click', function() {
    this.classList.toggle('selected')
    this.setAttribute('aria-checked', this.classList.contains('selected'))
  })
  box.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      this.classList.toggle('selected')
      this.setAttribute('aria-checked', this.classList.contains('selected'))
    }
  })
})

const modal = document.getElementById('confirmModal')
const modalDesc = document.getElementById('modalDesc')
const modalCancel = document.getElementById('modalCancel')
const modalConfirmBtn = document.getElementById('modalConfirm')

document.querySelector('.confirm').addEventListener('click', function() {
  const selectedBoxes = document.querySelectorAll('.box.selected')
  if (selectedBoxes.length > 0) {
    const selectedNames = Array.from(selectedBoxes)
      .map(box => box.getAttribute('data-name'))
      .join('、')
    modalDesc.textContent = '你选择了：' + selectedNames
    modal.classList.add('active')
  } else {
    alert('请至少选择一个奖励！')
  }
})

modalCancel.addEventListener('click', function() {
  modal.classList.remove('active')
})

modalConfirmBtn.addEventListener('click', function() {
  const selectedNames = Array.from(document.querySelectorAll('.box.selected'))
    .map(box => box.getAttribute('data-name'))
    .join(', ')
  document.querySelector('input[name="selection"]').value = selectedNames
  document.querySelector('form').submit()
})

modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.classList.remove('active')
  }
})

document.querySelector('.confirm').addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    this.click()
  }
})
