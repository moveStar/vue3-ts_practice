(() => {
  // 定义一个接口
  interface IPerson {
    firstName: string,
    lastName: string
  }
  // 输出姓名
  function showFullName(person:IPerson) {
    return person.firstName + '_'+person.lastName;
  }

  const person = {
    firstName: '东方',
    lastName: '不败'
  };
  console.log(showFullName(person));
})()