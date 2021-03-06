          // SideNav

          const sideNav = document.querySelector('.sidenav');
          M.Sidenav.init(sideNav,{});

          // Slider
          const slider = document.querySelector('.slider');
          M.Slider.init(slider, {
              indicators: false,
              height: 500,
              transition: 500,
              interval: 6000
          });

        // Autocomplete
        const ac = document.querySelector('.autocomplete');
        M.Autocomplete.init(ac, {
            data: {
                "Nairobi National Park": null,
                "Diani": null,
                "Lake Nakuru National Park": null,
                "Maasai Mara National Reserve": null,
                
            }
        });

        // Material Boxed
        const mb = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(mb, {});

        // Scrollspy

        const ss = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(ss, {});
