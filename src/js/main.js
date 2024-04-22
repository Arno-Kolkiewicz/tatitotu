function exclusiveCheck(clickedCheckbox) {
    var checkboxes = document.getElementsByName('checkbox');
    var checkedCount = 0;
    
    checkboxes = Array.from(checkboxes); // Convertir la collection en tableau
    
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedCount++;
        }
    });
    
    if (checkedCount === 0) {
        clickedCheckbox.checked = true;
    } else {
        checkboxes.forEach(function(checkbox) {
            if (checkbox !== clickedCheckbox) {
                checkbox.checked = false;
            }
        });
    }
}
