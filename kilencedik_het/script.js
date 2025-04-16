import { getAll, remove } from "./db.js";

const table = document.querySelector('table.table');

const generateTable = (tableData = []) => {
    const keys = Object.keys(tableData[0]);
    const thead = document.createElement('thead');
    table.appendChild(thead);
    const tr = document.createElement('tr');
    table.appendChild(tr);
    keys.forEach( k => {
        const th = document.createElement('th');
        th.innerText = k;
        tr.appendChild(th);
    });
    const th = document.createElement('th');
    th.innerText = 'actions';
    tr.appendChild(th);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    tableData.forEach( row => {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        keys.forEach( k => {
            const td = document.createElement('td');
            td.innerText = row[k];
            tr.appendChild(td);
        });
        const td = document.createElement('td');
        tr.appendChild(td);
        const btnGroup = document.createElement('div');
        btnGroup.classList.add('btn-group');
        td.appendChild(btnGroup);

        const editBtn = document.createElement('button');
        btnGroup.appendChild(editBtn);
        editBtn.classList.add('btn', 'btn-info');
        editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
        editBtn.addEventListener('click', () => {
            alert(JSON.stringify(row));
        });
        const deleteBtn = document.createElement('button');
        btnGroup.appendChild(deleteBtn);
        deleteBtn.classList.add('btn', 'btn-danger');
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
        deleteBtn.addEventListener('click', async () => {
            if(confirm('Biztos törölni akarja a sort?'))
            {
                await remove(row.id);
                tr.parentElement.removeChild(tr);
                alert(`${row.id} sor törölve.`)
            }
        });
    });

};

getAll().then(data => generateTable(data));