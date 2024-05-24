// var total = sum(30, 20)


function showStatusMsg(status){
    var msgToShow = ''
    switch (status) {
        case 'pending':
            msgToShow = "Your App Will be reviewed soon"
            break;

        case 'approve':
            msgToShow = "Congrats!. Your aap is approved"
            break;
        case 'review':
            msgToShow = "Your App is in review."
            break;
        case 'reject':
            msgToShow = "Your App will be reviewed soon."
            break;
        default:
            msgToShow = "Your App Will be reviewed soon"
            break;
    }
 return msgToShow
}
console.log (msgToShow)