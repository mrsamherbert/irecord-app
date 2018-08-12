<div class="info-message">
  <p><%= t("This record has been submitted and cannot be edited within this App") %>.
    <% if (obj.id) { %>
    <ion-button id="record-external-link" color="light" href="<%= obj.site_url %>/record-details?occurrence_id=<%= obj.id %>">
      <%= t("View on iRecord") %>
    </ion-button>
    <% } else { %>
      <%= t("Go to the") %> <a href="<%= obj.site_url %>"><%= t("iRecord website") %></a> <%= t("to edit") %>.</p>
    <% } %>
</div>
<ul class="table-view core inputs info no-top">
  <li class="table-view-cell species">
    <% if (obj.commonName) { %>
      <span class="media-object pull-right descript"><%- obj.commonName %></span>
    <% } %>
    <span class="media-object pull-right descript"><i><%- obj.scientific_name %></i></span>
  </li>
  <li class="table-view-cell">
    <span class="media-object pull-left icon icon-location"></span>
    <span class="media-object pull-right descript"><%- obj.locationName %></span>
    <span class="media-object pull-right descript"><%- obj.location %></span>
    <%= t("Location") %>
  </li>
  <li class="table-view-cell">
    <span class="media-object pull-left icon icon-calendar"></span>
    <span class="media-object pull-right descript"><%- obj.date %></span>
    <%= t("Date") %>
  </li>
  <% if (obj.number) { %>
    <li class="table-view-cell">
      <span class="media-object pull-left icon icon-number"></span>
      <span class="media-object pull-right descript"><%- obj.number %></span>
      <%= t("Number") %>
    </li>
  <% } %>
  <% if (obj.stage) { %>
    <li class="table-view-cell">
      <span class="media-object pull-left icon icon-stage"></span>
      <span class="media-object pull-right descript"><%- obj.stage %></span>
      <%= t("Stage") %>
    </li>
  <% } %>
  <% if (obj.comment) { %>
    <li class="table-view-cell">
      <span class="media-object pull-left icon icon-comment"></span>
      <%= t("Comment") %>
      <span class="comment descript"><%- obj.comment %></span>
    </li>
  <% } %>
  <% if (obj.identifiers) { %>
  <li class="table-view-cell">
    <span class="media-object pull-left icon icon-user-plus"></span>
    <%= t("Identifiers") %>
    <span class="comment descript"><%- obj.identifiers %></span>
  </li>
  <% } %>
  <% if (obj.activity_title) { %>
  <li class="table-view-cell">
    <span class="media-object pull-left icon icon-users"></span>
    <span class="media-object pull-right descript"><%- obj.activity_title %></span>
    <%= t("Activity") %>
  </li>
  <% } %>
  <% if (obj.media.length) { %>
    <li id="img-array">
      <% obj.media.each((image) =>{ %>
        <img src="<%- image.getURL() %>" alt="">
      <% }) %>
    </li>
  <% } %>
</ul>

<% if (obj.useExperiments) { %>
  <ion-button id="resend-btn" color="danger"><%= t("Resend the record") %></ion-button>
<% } %>

<div id="occurrence-id"><%- obj.cid %></div>
