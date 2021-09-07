---
title: How do I generate an ESR testing file?
layout: default
tags:
  - Setup
  - Testing
lang: en
sequence: 10
ref: how_to_generate_esr_testing_files
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/8894#issuecomment-910347904

ESR = Einzahlungsschein mit Referenznummer (DE, Switzerland) => EN: payment slip with reference number
-->

## Steps

### Prepare the ESR testing file
1. Start with a text file like this one: <a href="assets/ESR-file-how-to.txt  download" title="Download sample ESR testing file" target="\_blank">ESR-file-how-to.txt</a>

    >**Note:** You can use any text editor to open and edit your file. We do recommend using *Notepad++* for its text selection highlighting feature.

    <kbd><a href="https://user-images.githubusercontent.com/16001442/131689218-617629e8-27b3-495d-b0d5-525f411eefe1.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/16001442/131689218-617629e8-27b3-495d-b0d5-525f411eefe1.png" alt="ESR file example"></a></kbd>

    **Explanation:**
    - The upper part contains two example ESR lines based on the first reference number.
    - In the lower part the new file is built based on your reference number.

1. Copy the reference number of your invoice (taken from the database) and paste it above the lower reference number.
1. Split the reference number using spaces exactly like in the file (see screenshot), to have all those separate parts.
1. Then select one part in the original file to see which part of the line itself is selected:

    <kbd><a href="https://user-images.githubusercontent.com/16001442/131689750-0a7b6abf-c3c6-477b-a97e-e86ed04a65a1.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/16001442/131689750-0a7b6abf-c3c6-477b-a97e-e86ed04a65a1.png" alt="ESR selection"></a></kbd>

1. Select the equivalent part of the reference number and copy it over to its corresponding place in the line:

    <kbd><a href="https://user-images.githubusercontent.com/16001442/131689867-bb6c14f4-9e0c-4728-aa19-d2fa39a34d9c.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/16001442/131689867-bb6c14f4-9e0c-4728-aa19-d2fa39a34d9c.png" alt="Copy-paste ESR selection"></a></kbd>

1. Repeat this procedure for all other numbers:

    <kbd><a href="https://user-images.githubusercontent.com/16001442/131689958-1ca5561b-b9fa-44bf-8fee-c62cbc995314.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/16001442/131689958-1ca5561b-b9fa-44bf-8fee-c62cbc995314.png" alt="Detect parts by selection and copy-paste to corresponding position"></a></kbd>

### Save the ESR testing file
1. When you are done preparing the file, copy the lines and paste them to a new file
1. **Important:** Remove all white spaces between the numbers **to avoid errors!**
1. Give your file a name, e.g., `something.v11`.

    <kbd><a href="https://user-images.githubusercontent.com/16001442/131691361-92da234b-ab97-4469-8c83-6df7f55d9f99.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/16001442/131691361-92da234b-ab97-4469-8c83-6df7f55d9f99.png" alt="Remove all spaces and name the ESR testing file"></a></kbd>

## Notes
1. These numbers are not part of the reference number. They define the date when the import shall be done:

    <kbd><a href="https://user-images.githubusercontent.com/16001442/131690100-545da82c-1f00-4c25-b26f-caa62c4302cb.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/16001442/131690100-545da82c-1f00-4c25-b26f-caa62c4302cb.png" alt="ESR import dates"></a></kbd>

1. These numbers can be ignored. Leave them at 0.

    <kbd><a href="https://user-images.githubusercontent.com/16001442/131690607-5eaa01ee-af18-47b3-bb47-6389811bb7ba.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/16001442/131690607-5eaa01ee-af18-47b3-bb47-6389811bb7ba.png" alt="Leave these numbers untouched in the ESR test file"></a></kbd>

1. For higher amounts, just go to the left and replace those zeros.
    >**Note:** This procedure is TBV (To Be Verified) as higher amounts haven't been used for testing before.

    <kbd><a href="https://user-images.githubusercontent.com/16001442/131690797-eb6b9564-4175-4dc5-b3c0-cc4e0a1df654.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/16001442/131690797-eb6b9564-4175-4dc5-b3c0-cc4e0a1df654.png" alt="Replace zeros from the left to generate higher amounts"></a></kbd>
