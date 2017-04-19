---
layout: default
permalink: /
---

<div class="about-user">
    <div>
        <h2>Martin Schnurer</h2>
        <div class="my-photo">
            <img src="/assets/images/profile.jpg">
        </div>
        <div class="description-faded">
            Man with young body and soul. <br>Determined to enjoy the life as much as possible.<br>
            I am programmer.<br>
            I am web-developer.<br>
            I love machine learning (TensorFlow).<br>
            I love cycling.<br>
            I love photography.
        </div>
    </div>

</div>

# Some computer things I have experience with

<div class="page person-list">

    {% for image in site.static_files %}
    {% if image.path contains '/assets/images/favorite_languages' %}
        <div class="person-item">
            <div class="photo">
                <img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
            </div>
            <div class="name">
                <span> {{ image.name | remove: '.jpg' | remove: '.png' | remove: '.jpeg'  }} </span>
            </div>
        </div>
    {% endif %}
    {% endfor %}

</div>


# Aps I like and use

<div class="page person-list">

    {% for image in site.static_files %}
    {% if image.path contains '/assets/images/favorite_apps' %}
        <div class="person-item">
            <div class="photo">
                <img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
            </div>
            <div class="name">
                <span> {{ image.name | remove: '.jpg' | remove: '.png' | remove: '.jpeg'  }} </span>
            </div>
        </div>
    {% endif %}
    {% endfor %}
</div>


# Some of my favorite persons
<div class="page person-list">

    {% for image in site.static_files %}
    {% if image.path contains '/assets/images/favorite_persons' %}
        <div class="person-item">
            <div class="photo">
                <img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
            </div>
            <div class="name">

                <span> {{ image.name | remove: '.jpg' | remove: '.png' | remove: '.jpeg'  }} </span>
            </div>
        </div>
    {% endif %}
    {% endfor %}

</div>
