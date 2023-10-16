export const INITIAL_CONTENT = `
<p>Dear {{patient_name}} <strong><- this is a variable</strong></p>

<p>Following the consultation about {{dropdown:knee surgery|arm surgery|brain damage}}, I'd like to share with you the following information.</p>

<p>Here's a list of medical history:</p>

<p>{{medical_history}}</p>

<p><strong>^ this is a variable</strong></p>

<p>(ideally, this would be in a list like below)</p>

<ul>
  <li>Extensibility</li>
  <li>Performance</li>
  <li>{{patient_name}} <strong><- this is a variable</strong></li>
</ul>

<p>And a table:</p>

<table>
<tr>
<th></th>
<th>Col1</th>
<th>Col2</th>
</tr>
<tr>
<th>Row1</th>
<td></td>
<td></td>
</tr>
<tr>
<th>Row2</th>
<td></td>
<td></td>
</tr>
</table>

<p>And a nice emoji to finish with good vibes 👋</p>

<p>{{dropdown:Best regards|Sincerely|Yours truly|Cordially}},</p>

<p>{{practitioner_name}}</p>
`
