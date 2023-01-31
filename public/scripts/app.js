function addComment(){
	let name = document.getElementsByClassName('name-inp')[0].value
	let comment = document.getElementsByClassName('comment-inp')[0].value
	let contact = document.getElementsByClassName('contact-inp')[0].value
	let today = new Date()
	let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " | ";
	let dateTime = date + ' | ' + time
	let commentRow = document.createElement('div')
	let commentItems = document.getElementsByClassName('comment-area')[0]
	let commentRowContents = `<div class="comment-wrapper">
                    <i class="fa fa-user-circle-o" aria-hidden="true"></i> 
                    <div class="comment-container">
                        <span class="user-name">${name}<br><span class="date-time">${dateTime}</span></span>
                        <span class="contact-text">${contact}<br></span>
                        <span class="comment-text">${comment}<br><br></span>
                    </div>
                </div>`
	commentRow.innerHTML = commentRowContents
	commentItems.append(commentRow)
	console.log(name)
}