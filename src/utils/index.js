
export const timestampToDt = (timestamp) => {
    
    var t = new Date(timestamp*1000);
    var formatted = 
        ('0' + t.getHours()).slice(-2)
        + ':' + ('0' + t.getMinutes()).slice(-2)
        + ':' + ('0' + t.getSeconds()).slice(-2)
        + ' ' + ('0' + t.getDate()).slice(-2) 
        + '/' + ('0' + t.getMonth()).slice(-2)
        + '/' + (t.getFullYear());
        return formatted;
}