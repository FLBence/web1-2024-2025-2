const serverUrl = 'https://nettuts.hu/jms/FLBence/';
export const getAll = (entity = 'products') => {
    return fetch(`${serverUrl}${entity}`).then( r => r.json());
}
export const remove = (id = 0, entity = 'products') => {
    return fetch(`${serverUrl}${entity}/${id}`, {
        method: 'DELETE',
    }).then( r => r.json());
}