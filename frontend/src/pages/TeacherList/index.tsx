import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form action="" id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              {
                value: 'Programação Estruturada',
                label: 'Programação Estruturada',
              },
              {
                value: 'Inteligência Artificial 1',
                label: 'Inteligência Artificial 1',
              },
              {
                value: 'Inteligência Artificial 2',
                label: 'Inteligência Artificial 2',
              },
              {
                value: 'Estrutura de dados 1',
                label: 'Estrutura de dados 1',
              },
              {
                value: 'Estrutura de dados 2',
                label: 'Estrutura de dados 2',
              },
              {
                value: 'Redes de Computadores',
                label: 'Redes de Computadores',
              },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              {
                value: '0',
                label: 'Domingo',
              },
              {
                value: '1',
                label: 'Segunda-feira',
              },
              {
                value: '2',
                label: 'Terça-feira',
              },
              {
                value: '3',
                label: 'Quarta-feira',
              },
              {
                value: '4',
                label: 'Quinta-feira',
              },
              {
                value: '5',
                label: 'Sexta-feira',
              },
              {
                value: '6',
                label: 'Sábado',
              },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
