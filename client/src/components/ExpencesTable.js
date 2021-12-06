import React, { useContext, useState, useEffect } from "react";
import { http } from "../axios/axios";
import { GlobalContext } from "../context/AppState";

export const ExpencesTable = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { expences, deleteExpences, updateExpences } = useContext(GlobalContext);
  
  const [selectedExpence, setSelectedExpence] = useState(null);

  const expenceDelete = (id) => {
    http
      .delete(`expense/deleteexpense/${id}`)
      .then((response) => {
        console.log(response.data);
        deleteExpences(id);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdate = () => {
    if (!selectedExpence) {
      return;
    }
    http
      .patch(`expense/updateExpence/${selectedExpence.id}`, selectedExpence)
      .then((response) => {
       setIsEdit(false)
       updateExpences({...selectedExpence, amount: Number(selectedExpence.amount)})
      })
      .catch((error) => console.log(error));
      
  };

  const isEditing = (id) => {
    return isEdit && selectedExpence && selectedExpence.id === id;
  };

  return (
    <>
      <div className="printBtn_wrapper">
        <h3>History</h3>
        <button onClick={window.print}>Print</button>
      </div>
      <table>
        <thead>
          <th>Title</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Comments</th>
          <th>Action</th>
        </thead>
        <tbody>
          {expences.map((expence, index) => {
              return (
                <tr key={index}>
                  <td>
                    {isEditing(expence.id) ? (
                      <input
                        type="text"
                        value={selectedExpence.title}
                        onChange={(e) =>
                          setSelectedExpence({
                            ...selectedExpence,
                            title: e.target.value,
                          })
                        }
                      />
                    ) : (
                      expence.title
                    )}
                  </td>
                  <td>
                    {isEditing(expence.id) ? (
                      <input
                        type="number"
                        value={selectedExpence.amount}
                        onChange={(e) =>
                          setSelectedExpence({
                            ...selectedExpence,
                            amount: e.target.value,
                          })
                        }
                      />
                    ) : (
                      expence.amount
                    )}
                  </td>
                  <td>
                    {isEditing(expence.id) ? (
                      <textarea
                        value={selectedExpence.description}
                        onChange={(e) =>
                          setSelectedExpence({
                            ...selectedExpence,
                            description: e.target.value,
                          })
                        }
                      />
                    ) : (
                      expence.description
                    )}
                  </td>
                  <td>
                    {isEditing(expence.id) ? (
                      <input
                        type="text"
                        value={selectedExpence.comment}
                        onChange={(e) =>
                          setSelectedExpence({
                            ...selectedExpence,
                            comment: e.target.value,
                          })
                        }
                      />
                    ) : (
                      expence.comment
                    )}
                  </td>
                  
                  <td>
                    <div className=" actionBtn-wrapper">
                      <button
                        className="actionBtn deleteBtn"
                        onClick={() => {
                          expenceDelete(expence.id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="actionBtn saveBtn"
                        onClick={() => {
                          setIsEdit(!isEdit);
                          setSelectedExpence(expence);
                          if (isEdit) {
                            handleUpdate(expence.id);
                          }
                        }}
                      >
                        {!isEdit ? "Edit" : "Update"}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
