export function formatDate(date) {
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        month: "long",
        day: "numeric"
    }
    return new Date(date).toLocaleDateString("en-US", options)
}

export function formatTitle(title) {
    if (title.length > 0) return title.length > 20 ? title.substring(0, 20).concat("..."): title
    else return "Untitled"
}

export function sortByDate(notes) {
    // eslint-disable-next-line no-unused-expressions, array-callback-return
    return notes.sort((a, b) => {a.updatedAt - b.updatedAt})
}