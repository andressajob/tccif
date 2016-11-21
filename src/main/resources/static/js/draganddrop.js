function dragTopic(user, event) {
    event.dataTransfer.setData('User', user.id);
}
function dropTopic(target, event) {
    var user = event.dataTransfer.getData('User');
    target.appendChild(document.getElementById(user));
};
