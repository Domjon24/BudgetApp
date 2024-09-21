export default class BudgetTracker {
    constructor(querySelectorString) {
        this.root = document.querySelector(querySelectorString);
       this.root.innerHTML = BudgetTracker.html();
       this.root.querySelector(".new-entry").addEventListener("click", () => {
        this.onNewEntryBtnClick();
       });
       //load inital data from local storage
       this.load()
    }
    static html() {
        return `<table class="budget-tracker">
          <thread>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thread>

          <tbody class="entries">
           
          </tbody>
          <tbody>
            <tr>
            <td colspan="5" class="controls">
              <button type="button" class="new-entry">New Entry</button>
            </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5" class="summary">
                <strong>Total:</strong>
                <span class="total">$0.00</span>
              </td>
            </tr>
          </tfoot>
        </table>`;
    }
    static entryHTML() {
        return `<tr>
                    <td>
                    <input class="input input-date" type="date">
                    </td>
                    <td>
                    <input class="input input-description" type="text" placeholder="Add A Description">
                    </td>
                    <td>
                        <select class="input input-type">
                        <option value="">Select Type</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </td>
                    <td>
                    <input class="input input-amount" type="number"> 
                    </td>
                    <td>
                    <button class="delete-entry" type="button">&#10005</button> 
                    </td>
            </tr>`;
    }
    load() {
        const entries = JSON.parse(localStorage.getItem("Budget-Tracker-entries") || "[]");

            console.log(entries)

        for (const entry of entries) {
            this.addEntry(entry);
        }
        this.updateSummary()
    }
    updateSummary() {

    }
    save() {

    }
    addEntry(entry = {}) {
        this.root.querySelector(".entries").insertAdjacentHTML("beforeend", BudgetTracker.entryHTML())
        const row = this.root.querySelector(".entries tr:last-of-type");

        row.querySelector(".input-date").value = entry.date || new Date().toISOString().replace(/T.*/, "")
        row.querySelector(".input-description").value = entry.description || "";
        row.querySelector(".input-type").value = entry.type || "income";
        row.querySelector(".input-amount").value = entry.amount || 0;
        row.querySelector(".delete-entry").addEventListener("click", e => {
            this.onDeleteEntryBtnClick(e)
        })
    }
    getEntryRows() {

    }
    onNewEntryBtnClick() {
        this.addEntry();
    }
    onDeleteEntryBtnClick(e) {
        console.log("Entry Deleted")
    }
}