# Dlex-Test-Task

Set up a mini landing page that contains of 3 blocks and made an adaptive design to 320px
In the 3rd block I added form.

The form contains:
- first_name field
- last_name field
- email field
- phone field
- submit button

Added validation of fields by the following rules:
- first_name and last_name: minimum 2 characters
- email: must have a "@" symbol and a dot after it
- phone: check by number of characters, country code is substituted depending on the - user's country. To check the country I used International Telephone Input.

The validity check of the filled in data is performed when entering each character. In case of validation error, the corresponding field is highlighted in red.

For first_name and last_name I added the rule "no special characters and numbers".
added display of the flag of the corresponding country against each code.
Added output of corresponding validation errors under each field