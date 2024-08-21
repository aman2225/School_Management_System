import React, {useSate, useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
    AssignmentsContainer,
    Content,
    AssignmentsContent,
    AssignmentsHeader,
    AssignmentList,
    // AssignmentItem,
    AddAssignmentForm,
    AddAssignmentInput,
    AddAssignmentTextArea,
    AddAssignmentButton
} from '../../styles/AssignmentStyles'
const Assignment = () => {
    return(
        <AssignmentsContainer>
            <Sidebar />
            <Content>
                <AssignmentsContent>
                    <AssignmentsHeader>Assignments</AssignmentsHeader>
                    <AddAssignmentForm>
                        <AddAssignmentInput 
                            type='text'
                            placeholder='Enter assignment title'
                        />
                        <AddAssignmentTextArea
                            placeholder='Enter assignment description'
                        />
                        <AddAssignmentInput
                            type='text'
                            placeholder='Enter assignment grade'
                        />
                        <AddAssignmentInput 
                            type='text'
                            placeholder='Enter Assignment deadline'
                        />
                        <AddAssignmentButton type='submit'>Add Assignment</AddAssignmentButton>
                    </AddAssignmentForm>
                    <AssignmentList>
                        
                    </AssignmentList>
                </AssignmentsContent>
            </Content>
        </AssignmentsContainer>

    )
};

export default Assignment