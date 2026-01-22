var Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000
});

function alertToast(title, text, icon = 'success') {
    Toast.fire({
        title: title,
        text: text,
        icon: icon
    });
}

$(document).ready(function() {
    $('#send-button').on('click', function() {
        sendMessage();
    });

    $('#message-input').on('keypress', function(e) {
        if (e.which == 13) {
            sendMessage();
        }
    });

    function sendMessage() {
        var message = $('#message-input').val();
        if (message.trim() == '') {
            return;
        }

        $('#chat-messages').append('<div class="message user-message"><p>' + message + '</p></div>');
        $('#message-input').val('');

        $.ajax({
            url: '/chat',
            type: 'POST',
            contentType: 'application/json',
            data: message,
            success: function(response) {
                $('#chat-messages').append('<div class="message bot-message"><p>' + response + '</p></div>');
                $('#chat-messages').scrollTop($('#chat-messages')[0].scrollHeight);
            },
            error: function(xhr, status, error) {
                console.error("Error: " + error);
                $('#chat-messages').append('<div class="message bot-message"><p>Error communicating with the server.</p></div>');
                $('#chat-messages').scrollTop($('#chat-messages')[0].scrollHeight);
            }
        });
    }
});

