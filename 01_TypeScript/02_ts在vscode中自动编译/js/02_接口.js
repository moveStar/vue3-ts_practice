(() => {
    // 输出姓名
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    const person = {
        firstName: '东方',
        lastName: '不败'
    };
    console.log(showFullName(person));
})();
