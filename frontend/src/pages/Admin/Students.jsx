// import React, {useSate, useEffect} from 'react';
import Sidebar from './Sidebar';
// import axios from 'axios';

import {
    StudentsContainer,
    Content,
    StudentsContent,
    StudentsHeader,
    StudentList,
    // StudentItem,
    AddStudentForm,
    AddStudentInput,
    AddStudentButton
} from '../../styles/StudentStyles'
const Students = () => {
    return(
        <StudentsContainer>
            <Sidebar />
                <Content>
                    <StudentsContent>
                        <StudentsHeader>
                            <AddStudentForm>
                                <AddStudentInput
                                    type='Text'
                                    placeholder='Enter Student Name'
                                />
                                 <AddStudentInput
                                    type='Text'
                                    placeholder='Enter Registration Number'
                                />
                                 <AddStudentInput
                                    type='Text'
                                    placeholder='Enter Grade'
                                />
                                <AddStudentButton type='submit'>Add Student</AddStudentButton>
                            </AddStudentForm>     
                             <StudentList>

                             </StudentList>                      
                        </StudentsHeader>
                    </StudentsContent>
                </Content>
        </StudentsContainer>
        

    )
};

export default Students