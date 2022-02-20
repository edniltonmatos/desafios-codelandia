const style = document.createElement('style')
style.id="icons.svg.js"
style.textContent = `
  /*icons.svg.js*/
  i[icon]{
    display:flex;
    align-items:center;
    justify-content:center;
  }
`
document.head.append(style)

const svg = (element, path) => {
  let elementById = document.querySelector('#'+element)
  let svghtml = (element) => `<svg xmlns="http://www.w3.org/2000/svg" width="${element.attributes?.size?.value ?? 16}" height="${element.attributes?.size?.value ?? 16}" fill="currentColor" viewBox="0 0 16 16">${path}</svg>`

  if(elementById) {
    elementById.innerHTML = svghtml(elementById)
  } else {
    let elements = document.querySelectorAll('.'+element)
    elements.forEach(e => {
      e.innerHTML = svghtml(e)
    });
  }
  if(elementById && elementById.attributes?.href){elementById.addEventListener('click', () => window.open(elementById.attributes?.href?.value))}
}

const icon = {
  "LinkedIn":`<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>`,
  "GitHub":`<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>`,
  "List":`<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>`,
  "Email":`<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>`,
  "Facebook":`<path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M12,0.8H9.8c-1,0-1.9,0.4-2.5,1.1C6.6,2.5,6.2,3.5,6.2,4.4v2.2H4.1v2.9h2.2v5.7h2.9V9.4h2.2L12,6.6H9.1V4.4c0-0.2,0.1-0.4,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2H12V0.8z"/>`,
  "CodePen":`<path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M8,0.7l7.3,4.7v5.1L8,15.3l-7.3-4.7V5.4L8,0.7z"/><path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M8,15.3v-4.7"/><path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M15.3,5.4L8,10.6L0.7,5.4"/><path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M0.7,10.6L8,5.4l7.3,5.1"/><path fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" stroke-linejoin="round" d="M8,0.7v4.7"/>`,
  "Link":`<path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>`,
  "Instagram":`<path d="M22.6667 2.66666H9.33333C5.65143 2.66666 2.66666 5.65142 2.66666 9.33332V22.6667C2.66666 26.3486 5.65143 29.3333 9.33333 29.3333H22.6667C26.3486 29.3333 29.3333 26.3486 29.3333 22.6667V9.33332C29.3333 5.65142 26.3486 2.66666 22.6667 2.66666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.3333 15.16C21.4979 16.2697 21.3083 17.403 20.7917 18.3987C20.275 19.3944 19.4575 20.2019 18.4555 20.7062C17.4535 21.2106 16.3179 21.3861 15.2104 21.2079C14.1028 21.0297 13.0797 20.5068 12.2864 19.7136C11.4932 18.9203 10.9703 17.8972 10.7921 16.7896C10.6139 15.6821 10.7894 14.5465 11.2938 13.5445C11.7981 12.5425 12.6056 11.725 13.6013 11.2083C14.597 10.6917 15.7303 10.5021 16.84 10.6667C17.9719 10.8345 19.0198 11.362 19.8289 12.1711C20.638 12.9802 21.1655 14.0281 21.3333 15.16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23.3333 8.66666H23.3467" stroke="#d00439" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    "Smile":`<path d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63619 23.3638 2.66666 16 2.66666C8.63619 2.66666 2.66666 8.63619 2.66666 16C2.66666 23.3638 8.63619 29.3333 16 29.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.6667 18.6667C10.6667 18.6667 12.6667 21.3333 16 21.3333C19.3333 21.3333 21.3333 18.6667 21.3333 18.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 12H12.0133" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 12H20.0133" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    "Whatsapp":`<path stroke="white"     d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>`
}

svg('IconList', icon.List)