const defaultPage = 1;
const defaultSortField = "id";
const defaultSortDirection = "asc";

function goToLogin() {
    window.location.replace("/login");
}

function logout() {
    window.location.replace("/logout");
}

function goToProfile() {
    window.location.replace("/loginRedirect");
}

function goToUsers() {
    window.location.replace(`/users/page/${defaultPage}?sortField=${defaultSortField}&sortDir=${defaultSortDirection}`);
}

function sortTable(currentPage, columnHeader, reverseSortDir) {
    window.location.replace(`/users/page/${currentPage}?sortField=${columnHeader}&sortDir=${reverseSortDir}`);
}

function goToUsersNew() {
    window.location.replace("/users/new");
}

function changePassword(role) {
    window.location.replace(`/${role}/profile-page/edit`);
}

function uploadImage(role) {
    window.location.replace(`/${role}/profile-page/image-form`);
}

function goToLostPassword() {
    window.location.replace("/forgotten-password");
}

function goToClasses() {
    window.location.replace("/courses");
}

function deleteClass(id) {
    window.location.replace(`/courses/${id}`);
}

function goToRanksNew() {
    window.location.replace("/rank/new");
}

function goToRanksList() {
    window.location.replace("/rank/management");
}
function goToStudents() {
    window.location.replace("/student/management");
}

function goToQuests() {
    window.location.replace("/quests");
}

function goToQuestsReview() {
    window.location.replace("/student-quests/review");
}
