'use strict'

const students = [
    '1.Назарченко Артем',
    '2.Шамрай Тимур',
    '3.Попова Аліна',
    '4.Нікітін Андрій',
    '5.Варишко Андрій',
    '6.Жовнірович Іван',
    '7.Безклинська Мілєна'
]

const fs = require('fs');

function create_list_students() {
    fs.writeFileSync('students.txt', students.join('\n'));
}

create_list_students();